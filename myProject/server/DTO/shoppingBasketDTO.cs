using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class shoppingBasketDTO
    {
        public int gameID { get; set; }        // מזהה המשחק
        public string? GameName { get; set; }  // שם המשחק
        public int stockQuantity { get; set; }     // כמות המשחקים
        public decimal price { get; set; } // מחיר ליחידה
        public decimal TotalPrice => stockQuantity * price; // חישוב מחיר כולל
    }
}
