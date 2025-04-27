using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ShppingDTO
    {
        public int ShoppingId { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? ShppingDate { get; set; }
        public decimal? TotalAmount { get; set; }
    }
}
