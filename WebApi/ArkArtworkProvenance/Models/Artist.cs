using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VDS.RDF.Query;

namespace ArkArtworkProvenance.Models
{
    public class Artist
    {
        public Artist(SparqlResult result)
        {
            Name = result.Value("label").ToString();
            Abstract = result.Value("abstract").ToString();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Abstract { get; set; }
        public string ImageUrl { get; set; }
    }
}