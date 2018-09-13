using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace YaSuo.AdminLTE.Controllers
{
    public class DefaultController : Controller
    {
        // /Default/Index

        public ActionResult Index()
        {
            return View();
        }
	}
}