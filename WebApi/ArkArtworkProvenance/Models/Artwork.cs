using System.Linq;
using VDS.RDF.Query;

namespace ArkArtworkProvenance.Models
{
    public class Artwork
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Abstract { get; set; }
        public string ImageUrl { get; set; }
        public string Museum { get; set; }
        public string Artist { get; set; }

        public Artwork(string title, string museum, string _abstract, string imageUrl)
        {
            Title = title;
            Museum = museum;
            Abstract = _abstract;
            ImageUrl = imageUrl;
        }

        public Artwork(SparqlResult result)
        {
            Title = result.Value("label").ToString();
            Abstract = result.Value("abstract").ToString();
            ImageUrl = result.Value("depiction").ToString();
            if (result.Variables.Contains("museumlabel"))
            {
                Museum = result.Value("museumlabel").ToString();
            }
            if (result.Variables.Contains("authorLabel"))
            {
                Artist = result.Value("authorLabel").ToString();
            }
        }
    }
}