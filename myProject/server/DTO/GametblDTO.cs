using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class GametblDTO
    {
        public int GameId { get; set; }
        public string? GameName { get; set; }
        public int? CategoryId { get; set; }
        public double? Price { get; set; }
        public string? Image { get; set; }
        public int? StockQuantity { get; set; }
    }
}
