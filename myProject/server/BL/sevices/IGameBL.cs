using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;
using DTO;

namespace BL.sevices
{
    public interface IGameBL
    {
         //•	טבלת משחקים: שליפת רשימה, שליפת משחק לפי קוד, הוספה לרשימה, עדכון משחק ברשימה, הסרת משחק מהרשימה, שליפת משחקים לפי קטגוריה מבוקשת
  

            public List<GametblDTO> GetAllGames();


            public GametblDTO GetGame(int id);

            public bool AddGame(GametblDTO game);

            public bool Update(int id, GametblDTO Game);

            public bool dellGame(int id);

            public List<GametblDTO> GetGameAccoringCategory(int idCategor);
            public bool saveEmount(List<shoppingBasketDTO> ShoppingList);

            //public bool updateQuantity(int id, int quantity);

        }
    }

