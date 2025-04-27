using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class GameDepartment
    {
        public GameDepartment()
        {
            PurchaseDetailsDepartments = new HashSet<PurchaseDetailsDepartment>();
        }

        public int GameId { get; set; }
        public string? GameName { get; set; }
        public int? CategoryId { get; set; }
        public double? Price { get; set; }
        public string? Image { get; set; }
        public int? StockQuantity { get; set; }

        public virtual CategoryDepartment? Category { get; set; }
        public virtual ICollection<PurchaseDetailsDepartment> PurchaseDetailsDepartments { get; set; }
    }
}
