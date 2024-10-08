using CheckersGameAPI.Models;

public class CheckersService
{
    private GameState _state;

    public CheckersService()
    {
        ResetGame();
    }

    public GameState GetGameState() => _state;

    public bool MoveChecker(Move move)
    {
        var from = move.From;
        var toRow = move.ToRow;
        var toCol = move.ToCol;

        if (toRow < 0 || toRow >= 8 || toCol < 0 || toCol >= 8)
        {
            return false; 
        }

    
        if ((toRow + toCol) % 2 == 0)
        {
            return false; 
        }

        
        var movingPiece = _state.Board[from.Row][from.Col];
        if (movingPiece == null || movingPiece != _state.CurrentPlayer)
        {
            return false;
        }

        var target = _state.Board[toRow][toCol];
        if (target != null)
        {
            return false;
        }

   
        if (IsJumpAvailable(_state.CurrentPlayer))
        {
            if (!IsJumpMove(from, toRow, toCol))
            {
                return false;
            }
        }

        var rowDifference = toRow - from.Row;
        var colDifference = Math.Abs(toCol - from.Col);

        bool isForwardMove = (_state.CurrentPlayer == Players.Player1 && rowDifference < 0) ||
                             (_state.CurrentPlayer == Players.Player2 && rowDifference > 0);

        if (colDifference == 1 && isForwardMove)
        {
            _state.Board[toRow][toCol] = movingPiece;
            _state.Board[from.Row][from.Col] = null;
            _state.SelectedChecker = null;
            SwitchPlayer();
            CheckForWinner();
            return true;
        }
        else if (colDifference == 2)
        {
            
            int midRow = from.Row + rowDifference / 2;
            int midCol = (from.Col + toCol) / 2;
            var middlePiece = _state.Board[midRow][midCol];

            if (middlePiece != null && middlePiece != _state.CurrentPlayer)
            {
         
                _state.Board[toRow][toCol] = movingPiece;
                _state.Board[from.Row][from.Col] = null;
                _state.Board[midRow][midCol] = null;
                _state.SelectedChecker = null;
                SwitchPlayer();
                CheckForWinner();
                return true;
            }
        }

        return false; 
    }

    private bool IsJumpAvailable(string currentPlayer)
    {
        for (int row = 0; row < 8; row++)
        {
            for (int col = 0; col < 8; col++)
            {
                if (_state.Board[row][col] == currentPlayer)
                {
                    if (CanJumpFrom(row, col))
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    private bool CanJumpFrom(int row, int col)
    {
        int direction = _state.CurrentPlayer == Players.Player1 ? -1 : 1;

       
        return IsValidJump(row, col, row + 2 * direction, col + 2) || 
               IsValidJump(row, col, row + 2 * direction, col - 2);
    }

    private bool IsValidJump(int fromRow, int fromCol, int toRow, int toCol)
    {
      
        if (toRow < 0 || toRow >= 8 || toCol < 0 || toCol >= 8)
        {
            return false;
        }

       
        int midRow = (fromRow + toRow) / 2;
        int midCol = (fromCol + toCol) / 2;
        var middlePiece = _state.Board[midRow][midCol];

     
        bool isForwardJump = (_state.CurrentPlayer == Players.Player1 && toRow < fromRow) ||
                             (_state.CurrentPlayer == Players.Player2 && toRow > fromRow);

        
        return isForwardJump && middlePiece != null && middlePiece != _state.CurrentPlayer && _state.Board[toRow][toCol] == null;
    }

    private bool IsJumpMove(Checker from, int toRow, int toCol)
    {
        var rowDifference = Math.Abs(toRow - from.Row);
        var colDifference = Math.Abs(toCol - from.Col);
        return rowDifference == 2 && colDifference == 2;
    }

    public void CheckForWinner()
    {
        var player1Count = _state.Board.SelectMany(row => row).Count(piece => piece == Players.Player1);
        var player2Count = _state.Board.SelectMany(row => row).Count(piece => piece == Players.Player2);

        if (player1Count == 0)
        {
            _state.Winner = Players.Player2;
        }
        else if (player2Count == 0)
        {
            _state.Winner = Players.Player1;
        }
    }

    public void ResetGame()
    {
        _state = new GameState
        {
            Board = InitialBoard(),
            CurrentPlayer = Players.Player1,
            SelectedChecker = null,
            Winner = null
        };
    }

    private static string?[][] InitialBoard()
    {
        string?[][] board = new string?[8][];

        for (int row = 0; row < 8; row++)
        {
            board[row] = new string?[8];
            for (int col = 0; col < 8; col++)
            {
                board[row][col] = null;
            }
        }

        for (int row = 0; row < 3; row++)
        {
            for (int col = 0; col < 8; col++)
            {
                if ((row + col) % 2 == 1)
                {
                    board[row][col] = Players.Player2; 
                }
            }
        }

       
        for (int row = 5; row < 8; row++)
        {
            for (int col = 0; col < 8; col++)
            {
                if ((row + col) % 2 == 1)
                {
                    board[row][col] = Players.Player1; 
                }
            }
        }

        return board;
    }

    private void SwitchPlayer()
    {
        _state.CurrentPlayer = _state.CurrentPlayer == Players.Player1 ? Players.Player2 : Players.Player1;
    }
}
