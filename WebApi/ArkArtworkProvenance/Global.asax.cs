using System.Web;
using System.Web.Http;

namespace ArkArtworkProvenance
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
