using BL.sevices;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
//using static BL.sevices.IGameBL;
using DAL.models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        IGameBL Icb;
        public GameController(IGameBL Ic)
        {
            this.Icb = Ic;
        }

        [HttpGet("AllGames")]

        public List<GametblDTO> GetGames()
        {
            return Icb.GetAllGames();
        }

        [HttpGet("AllGamesAccordingCategory/{id}")]

        public List<GametblDTO> GetGamesAccordingCategory(int id)
        {
            return Icb.GetGameAccoringCategory(id);
        }

        [HttpGet("OneGame/{id}")]

        public GametblDTO GetGame(int id)
        {
            return Icb.GetGame(id);
        }

        [HttpDelete("DeleteGame/{id}")]

        public bool dellCategory(int id)
        {
            return Icb.dellGame(id);
        }

        [HttpPut("AddGame")]

        public bool AddCategor(GametblDTO Game)
        {
            return Icb.AddGame(Game);
        }

        [HttpPost("update/{id}")]

        public bool Update(int id, GametblDTO Game)
        {
            return Icb.Update(id, Game);
        }

      




    }
}
