using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;
using DAL.sevices;
using DTO;

namespace BL.sevices
{
    public interface IShppingBL
    {
        public int saveShopping(ShppingDTO s);
        public List<ShppingDTO> GetShopping();
    }
}
