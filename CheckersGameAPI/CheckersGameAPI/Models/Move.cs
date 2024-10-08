namespace CheckersGameAPI.Models
{
     public class Move
     {
        public Checker From { get; set; }
        public int ToRow { get; set; }
        public int ToCol { get; set; }
     }
}
