using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;

namespace DAL.sevices
{
    public interface IGameDAL
    {
        public bool AddGame(GameDepartment Game);


        public bool dellGame(int id);
      

        public List<GameDepartment> GetGames();


        public bool Update(int id, GameDepartment Game);



      


    }
}
