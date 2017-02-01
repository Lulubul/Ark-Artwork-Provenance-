using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using VDS.RDF.Storage;
using VDS.RDF.Query;
using ArkArtworkProvenance.Models;
using System.Linq;

namespace ArkArtworkProvenance.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ArtistsController : ApiController
    {
        private const string StarDogUrl = "http://localhost:5820/";
        private const string DbName = "myDb";

        // GET api/<controller>
        public IEnumerable<Artist> Get()
        {
            using (StardogConnector dog = new StardogConnector(StarDogUrl, DbName, "admin", "admin"))
            {
                SparqlResultSet artistsResults = dog.Query(
                    "SELECT distinct ?label ?abstract WHERE {" +
                    "?person rdf:type dbo:Artist ." +
                    "?person rdfs:label ?label . " +
                    "?person dbo:abstract ?abstract ." +
                    "FILTER(lang(?abstract) = 'en') ." +
                    "FILTER(lang(?label) = \"en\") }") as SparqlResultSet;

                var artists = artistsResults?.Select(x => new Artist(x));
                return artists;
            }
        }
    }
}
