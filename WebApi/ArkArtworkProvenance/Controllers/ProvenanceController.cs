using System.Collections.Generic;
using System.Linq;

using System.Web.Http;
using System.Web.Http.Cors;
using ArkArtworkProvenance.Models;
using VDS.RDF.Query;
using VDS.RDF.Storage;

namespace ArkArtworkProvenance.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ProvenanceController : ApiController
    {
        private const string StarDogUrl = "http://localhost:5820/";
        private const string DbName = "ArkDB";

        public IEnumerable<Provenance> Get(string title)
        {
            using (StardogConnector dog = new StardogConnector(StarDogUrl, DbName, "admin", "admin"))
            {
                SparqlResultSet provResults = dog.Query(
                    "SELECT distinct ?provenanceLabel ?location ?dateAcquired ?ownerLabel ?dispayOrder WHERE  {" +
                        "?artwork a dbo:Artwork ." +
                        "?artwork rdfs:label ?label . " +
                        "?artwork :provenance ?provenance ." +
                        "?provenance :dateAcquired ?dateAcquired ." +
                        "?provenance rdfs:label ?provenanceLabel ." +
                        "?provenance schema:location ?city ." +
                        "?city rdfs:label ?location ." +
                        "?provenance gvp:displayOrder ?dispayOrder." +
                        "?provenance gvp:ulan2779_owned_by ?owner. " +
                        "?owner rdfs:label ?ownerLabel. " +
                        "FILTER regex(str(?label), \"" + title + "\") ." +
                        "FILTER(LANG(?ownerLabel) = \"\" || LANGMATCHES(LANG(?ownerLabel), \"en\")) ." +
                        "FILTER(lang(?location) = \"en\")} " +
                     "ORDER BY ASC(xsd:integer(?dispayOrder))") as SparqlResultSet;

                var provenance = provResults?
                    .Select(x => new Provenance(x))
                    .GroupBy(x => x.DispayOrder, (key, g) => g.OrderBy(e => e.DispayOrder).First());
                return provenance;
            }
        }
    }
}