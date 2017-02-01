using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using ArkArtworkProvenance.Models;
using VDS.RDF.Query;
using VDS.RDF.Storage;

namespace ArkArtworkProvenance.Controllers
{
    public class ArtworsReadController : ApiController
    {

        private const string StarDogUrl = "http://localhost:5820/";
        private const string DbName = "ArkDB";

        // GET api/<controller>/?artistName="any"
        public IEnumerable<Artwork> Get(string artistName)
        {
            using (StardogConnector dog = new StardogConnector(StarDogUrl, DbName, "admin", "admin"))
            {
                SparqlResultSet artworksResults = dog.Query(
                    "SELECT distinct ?label ?abstract?depiction ?labelArtwork WHERE {" +
                    "?person rdf:type dbo:Artist ." +
                    "?person rdfs:label ?label ." +
                    "?artwork a dbo:Artwork ." +
                    "?artwork foaf:depiction ?depiction ." +
                    "?person dbo:abstract ?abstract ." +
                    "?artwork dbo:author ?person ." +
                    "?artwork rdfs:label ?labelArtwork . " +
                    " FILTER(lang(?abstract) = 'en') ." +
                    "FILTER(lang(?label) = 'en') ." +
                    "FILTER regex(str(?labelArtwork),   \"" + artistName + "\")" +
                    "FILTER(lang(?labelArtwork) = 'en') }") 
                  as SparqlResultSet;

                var artworks = artworksResults?.Select(x => new Artwork(x));
                return artworks;
            }
        }
       
    }
}
