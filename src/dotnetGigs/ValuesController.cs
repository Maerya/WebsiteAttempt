using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DotNetGigs;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularWithAspCoreOne
{
    [Route("api/values")]
    public class ValuesController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Hello", "World" };
        }

        [HttpPost]
        public IActionResult Get([FromBody] Object file)
        {
            Parcer parce = new Parcer();

            parce.setFile(file);
            return new ObjectResult(file);
        }


    }
   
}
