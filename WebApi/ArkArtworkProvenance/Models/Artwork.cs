using VDS.RDF.Query;

namespace ArkArtworkProvenance.Models
{
    public class Artwork
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Abstract { get; set; }
        public string ImageUrl { get; set; }

        public Artwork(string title, string _abstract, string imageUrl)
        {
            Title = title;
            Abstract = _abstract;
            ImageUrl = imageUrl;
        }

        public Artwork(SparqlResult result)
        {
            Title = result.Value("label").ToString();
            Abstract = result.Value("abstract").ToString();
            ImageUrl = result.Value("depiction").ToString();
        }
    }
}