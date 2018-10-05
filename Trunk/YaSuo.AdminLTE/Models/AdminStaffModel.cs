using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace YaSuo.AdminLTE.Models
{
    public class AdminStaffModel
    {
        public long Id { get; set; }
        public int Status { get; set; }
        public bool Sex { get; set; }
        public string Account { get; set; }
        public string Password { get; set; }
        public string PasswordConfirm { get; set; }
        public long DepartmentId { get; set; }
        public long[] RoleId { get; set; }
        public DateTime Birth { get; set; }
        public string Descr { get; set; }
    }
}