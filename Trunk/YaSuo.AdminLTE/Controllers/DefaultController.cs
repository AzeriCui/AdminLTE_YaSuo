using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using YaSuo.AdminLTE.Models;

namespace YaSuo.AdminLTE.Controllers
{
    public class DefaultController : Controller
    {
        public ActionResult Login()
        {
            return View();
        }




        // GET: /Default/Index
        public ActionResult Index()
        {
            return View();
        }

        // GET: /Default/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: /Default/Create
        public ActionResult Create()
        {
            IList<SelectListItem> departmentId = new List<SelectListItem>();
            departmentId.Add(new SelectListItem() { Text = "", Value = "" });
            departmentId.Add(new SelectListItem() { Text = "Department Id 1", Value = "1" });
            departmentId.Add(new SelectListItem() { Text = "Department Id 2", Value = "2" });
            departmentId.Add(new SelectListItem() { Text = "Department Id 3", Value = "3" });
            departmentId.Add(new SelectListItem() { Text = "Department Id 4", Value = "4" });
            departmentId.Add(new SelectListItem() { Text = "Department Id 5", Value = "5" });
            ViewBag.DepartmentId = new SelectList(departmentId, "Value", "Text");

            IList<SelectListItem> roleId = new List<SelectListItem>();
            roleId.Add(new SelectListItem() { Text = "Role Id 1", Value = "1" });
            roleId.Add(new SelectListItem() { Text = "Role Id 2", Value = "2" });
            roleId.Add(new SelectListItem() { Text = "Role Id 3", Value = "3" });
            roleId.Add(new SelectListItem() { Text = "Role Id 4", Value = "4" });
            roleId.Add(new SelectListItem() { Text = "Role Id 5", Value = "5" });
            ViewBag.RoleId = new MultiSelectList(roleId, "Value", "Text");

            return View();
        }

        // POST: /Default/Create
        [HttpPost]
        public ActionResult Create(AdminStaffModel model)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: /Default/Edit/5
        public ActionResult Edit(int id = 1)
        {
            IList<SelectListItem> departmentId = new List<SelectListItem>();
            departmentId.Add(new SelectListItem() { Text = "", Value = "" });
            departmentId.Add(new SelectListItem() { Text = "Department Id 1", Value = "1" });
            departmentId.Add(new SelectListItem() { Text = "Department Id 2", Value = "2" });
            departmentId.Add(new SelectListItem() { Text = "Department Id 3", Value = "3" });
            departmentId.Add(new SelectListItem() { Text = "Department Id 4", Value = "4" });
            departmentId.Add(new SelectListItem() { Text = "Department Id 5", Value = "5" });
            ViewBag.DepartmentId = new SelectList(departmentId, "Value", "Text");

            IList<SelectListItem> roleId = new List<SelectListItem>();
            roleId.Add(new SelectListItem() { Text = "Role Id 1", Value = "1" });
            roleId.Add(new SelectListItem() { Text = "Role Id 2", Value = "2" });
            roleId.Add(new SelectListItem() { Text = "Role Id 3", Value = "3" });
            roleId.Add(new SelectListItem() { Text = "Role Id 4", Value = "4" });
            roleId.Add(new SelectListItem() { Text = "Role Id 5", Value = "5" });
            ViewBag.RoleId = new MultiSelectList(roleId, "Value", "Text");

            return View();
        }

        // POST: /Default/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: /Default/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: /Default/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
