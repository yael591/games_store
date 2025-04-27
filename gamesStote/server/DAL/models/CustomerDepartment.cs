using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class CustomerDepartment
    {
        public CustomerDepartment()
        {
            ShoppingDepartments = new HashSet<ShoppingDepartment>();
        }

        public int CustId { get; set; }
        public string? CustName { get; set; }
        public string? Custpass { get; set; }
        public string? CustCreditDetails { get; set; }

        public virtual ICollection<ShoppingDepartment> ShoppingDepartments { get; set; }
    }
}
