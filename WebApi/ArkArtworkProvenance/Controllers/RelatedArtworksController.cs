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
    public class RelatedArtworksController : ApiController
    {
        private const string StarDogUrl = "http://localhost:5820/";
        private const string DbName = "ArkDB";

        // GET api/<controller>?artist="any"
        public IEnumerable<Artwork> Get(string artist)
        {
            using (StardogConnector dog = new StardogConnector(StarDogUrl, DbName, "admin", "admin"))
            {
                SparqlResultSet artworkResults = dog.Query(
                    "SELECT distinct ?label ?depiction ?abstract WHERE {" +
                    "?artwork a dbo:Artwork ." +
                    "?artwork rdfs:label ?label . " +
                    "?artwork dbo:abstract ?abstract ." +
                    "?artwork foaf:depiction ?depiction ." +
                    "?artwork dbo:author ?author ." +
                    "?author foaf:name ?authorLabel ." +
                    "FILTER regex(str(?authorLabel), \"" + artist + "\")" +
                    "FILTER(lang(?label) = \"en\") ." +
                    "FILTER(lang(?abstract) = \"en\")}") as SparqlResultSet;

                var artworks = artworkResults?.Select(x => new Artwork(x));
                return artworks;
            }
        }
    }
}