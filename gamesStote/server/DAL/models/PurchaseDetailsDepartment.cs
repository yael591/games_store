using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class PurchaseDetailsDepartment
    {
        public int ShoppingDetailId { get; set; }
        public int? ShoppingId { get; set; }
        public int? GameId { get; set; }
        public int? Quantity { get; set; }

        public virtual GameDepartment? Game { get; set; }
        public virtual ShoppingDepartment? Shopping { get; set; }
    }
}
