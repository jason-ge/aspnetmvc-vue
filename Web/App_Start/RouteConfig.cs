using System.Web.Mvc;
using System.Web.Routing;

namespace AspNetMvcVue
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Base",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "UserAgreement", id = UrlParameter.Optional }
            );
            routes.MapRoute("Error", "{*url}",
                new { controller = "Error", action = "NotFound" }
            );
        }
    }
}