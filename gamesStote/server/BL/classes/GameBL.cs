using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BL.sevices;
using DAL.models;
using DAL.sevices;
using DTO;

namespace BL.classes
{
    public class GameBL:IGameBL
    {
        //•	טבלת משחקים: שליפת רשימה, שליפת משחק לפי קוד, הוספה לרשימה, עדכון משחק ברשימה, הסרת משחק מהרשימה, שליפת משחקים לפי קטגוריה מבוקשת
        GameStoreContext db = new();

            IGameDAL gd;
            IMapper mapperr;
            public GameBL(IGameDAL g)
            {
                this.gd = g;
                var config = new MapperConfiguration(cfg => { cfg.AddProfile<MyProfile>(); });
                this.mapperr = config.CreateMapper();
            }
            public bool AddGame(GametblDTO game)
            {
                GameDepartment g = mapperr.Map<GametblDTO,GameDepartment>(game);
      
            return gd.AddGame(g);

            }

            public bool dellGame(int id)
            {
                return gd.dellGame(id);
            }
        public GametblDTO GetGame(int id)
        {
            foreach (var item in gd.GetGames())
            {
                if (item.GameId == id)
                    return mapperr.Map<GameDepartment, GametblDTO>(item);
            }
            return null;
        }
        public List<GametblDTO> GetAllGames()
            {
            return mapperr.Map<List < GameDepartment>,List < GametblDTO >> (gd.GetGames());
            }

            public bool Update(int id, GametblDTO Game)
            {
                GameDepartment gt = mapperr.Map<GametblDTO, GameDepartment>(Game);
                return gd.Update(id, gt);
            }

            public List<GametblDTO> GetGameAccoringCategory(int id)
            { 
            var g = gd.GetGames().Where(x => x.CategoryId == id).ToList();
                return mapperr.Map<List<GameDepartment>, List<GametblDTO>>(g);
            }


        public bool saveEmount(List<shoppingBasketDTO> ShoppingList)
        {
            try
            {
                foreach (var item in ShoppingList)                                             //update all games
                {
                    if (item != null)
                    {
                        GameDepartment g = gd.GetGames().FirstOrDefault(x =>x.GameId==item.gameID);
                        gd.Update(item.gameID, new GameDepartment()
                        {
                            GameId=g.GameId,
                            GameName=g.GameName,
                            CategoryId=g.CategoryId,
                            Price=g.Price,
                            Image=g.Image,
                            StockQuantity=g.StockQuantity-item.stockQuantity
                        }

                        );
                      
                    }
                  
                }
                return true;
            }
            catch
            {
                return false;
            }

        }

    }
    }

