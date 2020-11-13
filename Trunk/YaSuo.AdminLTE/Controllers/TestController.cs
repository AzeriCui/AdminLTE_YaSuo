using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace YaSuo.AdminLTE.Controllers
{
    public class TestController : Controller
    {
        //
        // GET: /Test/
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult T()
        {
            return Json(new { Code = 1, Message = "OK" }, "text/html");
        }

    }
}