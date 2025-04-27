using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;
using DAL.sevices;

namespace DAL.classes
{
    public class GametblDAL:IGameDAL
    {
        GameStoreContext DB = new GameStoreContext();
        public bool AddGame(GameDepartment Game)
        {
            try
            {
                DB.GameDepartments.Add(Game);
                DB.SaveChanges();
                return true;
            }

            catch
            {
                return false;
            }

        }

        public bool dellGame(int id)
        {
            try
            {
                GameDepartment i = DB.GameDepartments.FirstOrDefault(o => o.GameId == id);
                DB.GameDepartments.Remove(i);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }


        }
        //public GameDepartment GetGame(int id)
        //{
        //    try
        //    {
        //        GameDepartment i = DB.GameDepartments.FirstOrDefault(o => o.GameId == id);
        //        return i;
        //    }
        //    catch
        //    {
        //        return null;
        //    }

        //}

        public List<GameDepartment> GetGames()
        {
            return DB.GameDepartments.ToList();
        }

        public bool Update(int id, GameDepartment Game)
        {
            try
            {
                DB.GameDepartments.FirstOrDefault(i => i.GameId == id).GameName = Game.GameName;
                DB.GameDepartments.FirstOrDefault(i => i.GameId == id).Image = Game.Image;
                DB.GameDepartments.FirstOrDefault(i => i.GameId == id).CategoryId = Game.CategoryId;
                DB.GameDepartments.FirstOrDefault(i => i.GameId == id).Price = Game.Price;
                DB.GameDepartments.FirstOrDefault(i => i.GameId == id).StockQuantity = Game.StockQuantity;
                DB.SaveChanges();
                return true;
            }
            catch
            { return false; }
        }

       


     



    }
}
