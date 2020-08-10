using System.Web.Mvc;

namespace AspNetMvcVue.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult UserAgreement()
        {
            return View();
        }

        [HttpPost]
        public ActionResult UserAgreement(bool bAgreed)
        {
            if (bAgreed)
            {
                return RedirectToAction("Home");
            }
            else
            {
                return RedirectToAction("UserAgreementDisagree");
            }
        }

        [HttpGet]
        public ActionResult UserAgreementDisagree()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Home()
        {
            return View();
        }

        [HttpGet]
        public ActionResult PersonalData() {
            return View();
        }
    }
}
