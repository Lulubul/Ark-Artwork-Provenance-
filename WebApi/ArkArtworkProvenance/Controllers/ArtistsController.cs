using System;
using System.Web.Http;
using VDS.RDF.Query;


namespace ArkArtworkProvenance.Controllers
{
    public class ArtistsController : ApiController
    {
        [HttpGet]
        public SparqlResultSet GetArtists()
        {
            //Define a remote endpoint
            //Use the DBPedia SPARQL endpoint with the default Graph set to DBPedia
            SparqlRemoteEndpoint endpoint = new SparqlRemoteEndpoint(new Uri("http://dbpedia.org/sparql"), "http://dbpedia.org");

            //Make a SELECT query against the Endpoint
            SparqlResultSet results = endpoint.QueryWithResultSet("select distinct ?Concept where {[] a ?Concept} LIMIT 100");

            return results;

        }
    }
}
