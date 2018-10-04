using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace YaSuo.AdminLTE.Models
{
    public class AdminStaffModel
    {
        //[Required]
        public long Id { get; set; }
        //[Required]
        public int Status { get; set; }
        //[Required]
        public bool Sex { get; set; }
        //[Required]
        public string Account { get; set; }
        //[Required]
        public string Password { get; set; }
        //[Required]
        public string PasswordConfirm { get; set; }
        //[Required]
        public long DepartmentId { get; set; }
        //[Required]
        public DateTime Birth { get; set; }
        //[Required]
        public string Descr { get; set; }
    }
}