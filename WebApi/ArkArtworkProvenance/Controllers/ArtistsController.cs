using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using VDS.RDF.Storage;


namespace ArkArtworkProvenance.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ArtistsController : ApiController
    {
        [HttpGet]
        public string GetArtists()
        {
            using (StardogConnector dog = new StardogConnector("http://localhost:5820/", "Ark", "admin", "admin"))
            {
                var results = dog.Query("select distinct ?subj {?subj skos:prefLabel|skos:altLabel \"female\"@en}");
                return results.ToString();
            }
        }
    }
}
