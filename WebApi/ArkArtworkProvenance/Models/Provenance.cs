
using VDS.RDF.Query;

namespace ArkArtworkProvenance.Models
{
    public class Provenance
    {
        public string DateAcquired { get; set; }
        public string OwnedBy { get; set; }
        public string Location { get; set; }
        public string DispayOrder { get; set; }

        public Provenance(SparqlResult result)
        {
            DateAcquired = result.Value("dateAcquired").ToString();
            Location = result.Value("location").ToString();
            OwnedBy = result.Value("ownerLabel").ToString();
            DispayOrder = result.Value("dispayOrder").ToString();
        }
    }
}