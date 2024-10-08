using Microsoft.AspNetCore.Mvc;
using CheckersGameAPI.Models;

namespace CheckersGameAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CheckersController : ControllerBase
    {
        private readonly CheckersService _checkersService;

        public CheckersController(CheckersService checkersService)
        {
            _checkersService = checkersService;
        }

        [HttpGet("initGame")]
        public IActionResult InitGame()
        {
            var gameState = _checkersService.GetGameState();
            return Ok(gameState);
        }

        [HttpPost("resetGame")]
        public IActionResult ResetGame()
        {
            _checkersService.ResetGame();
            return Ok(_checkersService.GetGameState());
        }

        [HttpPost("moveChecker")]
        public IActionResult MoveChecker([FromBody] Move move)
        {
            bool success = _checkersService.MoveChecker(move);
            if (success)
            {
                var gameState = _checkersService.GetGameState();
                return Ok(gameState);
            }
            return BadRequest("Invalid move.");
        }

    }
}
