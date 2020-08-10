using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace AspNetMvcVue.Controllers
{
    public class EmployeeDataController : ApiController
    {
        [HttpGet]
        public JObject GetEmployee()
        {
            const string jsonEmployee = @" {
EEID: ""5"", 
FIRSTNAME: ""John"",
LASTNAME: ""Smith"",
GENDER: ""M"",
DATEOFBIRTH: ""10/15/1965"", 
DATEOFHIRE: ""11/12/1990"", 
STATUS: ""A"", 
MARITALSTATUS: ""M"",
PAYRATECURRENTYEAR: ""44433.33"",
PROVINCE: ""ON"",
SPDATEOFBIRTH: ""5/17/1968"" }";
            
            return (JObject.Parse(jsonEmployee));
        }
    }
}
