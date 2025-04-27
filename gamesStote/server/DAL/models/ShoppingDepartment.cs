using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class ShoppingDepartment
    {
        public ShoppingDepartment()
        {
            PurchaseDetailsDepartments = new HashSet<PurchaseDetailsDepartment>();
        }

        public int ShoppingId { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? ShppingDate { get; set; }
        public decimal? TotalAmount { get; set; }

        public virtual CustomerDepartment? Customer { get; set; }
        public virtual ICollection<PurchaseDetailsDepartment> PurchaseDetailsDepartments { get; set; }
    }
}
