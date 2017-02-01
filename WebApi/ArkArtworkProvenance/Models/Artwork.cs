using System.Collections.Generic;
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
        public string Author { get; set; }

        public Artwork(string title, string museum, string _abstract, string imageUrl, string author)
        {
            Title = title;
            Museum = museum;
            Abstract = _abstract;
            ImageUrl = imageUrl;
            Author = author;
        }

        public Artwork(SparqlResult result)
        {
            Title = result.Value("label").ToString();
            if (result.Variables.Contains("abstract"))
            {
                Abstract = result.Value("abstract").ToString();
            }
            ImageUrl = result.Value("depiction").ToString();
            if (result.Variables.Contains("museumlabel"))
            {
                Museum = result.Value("museumlabel").ToString();
            }
            if (result.Variables.Contains("authorLabel"))
            {
                Author = result.Value("authorLabel").ToString();
            }
        }
    }

}