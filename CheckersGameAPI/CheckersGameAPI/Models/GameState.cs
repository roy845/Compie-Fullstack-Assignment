namespace CheckersGameAPI.Models
{
    public class GameState
    {
        public string?[][] Board { get; set; }
        public string CurrentPlayer { get; set; }
        public Checker? SelectedChecker { get; set; }
        public string? Winner { get; set; }

    }
}
