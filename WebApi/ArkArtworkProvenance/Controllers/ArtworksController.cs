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
    public class ArtworksController : ApiController
    {
        private const string StarDogUrl = "http://localhost:5820/";
        private const string DbName = "Ark";  

        // GET api/<controller>
        public IEnumerable<Artwork> Get()
        {
            using (StardogConnector dog = new StardogConnector(StarDogUrl, DbName, "admin", "admin"))
            {
                SparqlResultSet artworksResults = dog.Query(
                    "SELECT distinct ?label ?abstract ?depiction WHERE {" +
                    "?artwork a dbo:Artwork ." +
                    "?artwork rdfs:label ?label . " +
                    "?artwork dbo:abstract ?abstract ." +
                    "?artwork foaf:depiction ?depiction ." +
                    "FILTER(lang(?label) = \"en\") ." +
                    "FILTER(lang(?abstract) = \"en\")}") as SparqlResultSet;

                var artworks = artworksResults?.Select(x => new Artwork(x));
                return artworks;
            }
        }

        // GET api/<controller>?title="any"
        public Artwork Get(string title)
        {
            using (StardogConnector dog = new StardogConnector(StarDogUrl, DbName, "admin", "admin"))
            {
                SparqlResultSet artworkResults = dog.Query(
                    "SELECT distinct ?abstract ?depiction WHERE {" +
                    "?artwork a dbo:Artwork ." +
                    "?artwork rdfs:label \"" + title + "\"@en . " +
                    "?artwork dbo:abstract ?abstract ." +
                    "?artwork foaf:depiction ?depiction ." +
                    "FILTER(lang(?abstract) = \"en\")}") as SparqlResultSet;

                var result = artworkResults[0];
                return new Artwork(title,
                    result.Value("abstract").ToString(),
                    result.Value("depiction").ToString());
            }
        }

    }
}