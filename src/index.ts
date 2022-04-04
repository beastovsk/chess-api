class Game {
    private pieces = Game.makePieces()

    private static makePieces() {
        return [
            // King
            new King("White", "E", 1),
            new King("White", "E", 8),

            // Queen
            new Queen("White", "D", 1),
            new Queen("White", "D", 8),

            // Bishops
            new Bishop("White", "C", 1),
            new Bishop("White", "F", 1),
            new Bishop("Black", "C", 8),
            new Bishop("Black", "F", 8),

            // Knight
            new Knight("White", "G", 1),
            new Knight("White", "B", 1),
            new Knight("Black", "G", 8),
            new Knight("Black", "B", 8),

            // Rook
            new Rook("White", "H", 1),
            new Rook("White", "A", 1),
            new Rook("Black", "H", 8),
            new Rook("Black", "A", 8),

            // Pawn
            new Pawn("White", "A", 2),
            new Pawn("White", "B", 2),
            new Pawn("White", "C", 2),
            new Pawn("White", "D", 2),
            new Pawn("White", "E", 2),
            new Pawn("White", "F", 2),
            new Pawn("White", "G", 2),
            new Pawn("White", "H", 2),

            new Pawn("Black", "A", 7),
            new Pawn("Black", "B", 7),
            new Pawn("Black", "C", 7),
            new Pawn("Black", "D", 7),
            new Pawn("Black", "E", 7),
            new Pawn("Black", "F", 7),
            new Pawn("Black", "G", 7),
            new Pawn("Black", "H", 7),
        ];
    }
}

abstract class Piece {
    protected position: Position;
    constructor(private readonly color: Color, file: File, rank: Rank) {
        this.position = new Position(file, rank);
    }

    moveTo(position: Position) {
        this.position = position
    }
    abstract canMoveTo(position: Position): boolean
}

class Position {
    constructor(private file: File, private rank: Rank) {}
    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

class King extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}

class Queen extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 8 && distance.file < 8;
    }
}

class Bishop extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position);
        // if () {}
        return distance.rank < 8 && distance.file < 8;
    }
}

class Knight extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position);
        // if () {}
        return distance.rank < 3 && distance.file < 2;
    }
}

class Rook extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position);
        // if () {}
        return distance.rank < 8 && distance.file < 8;
    }
}

class Pawn extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file == 0;
    }
}

type Color = "Black" | "White";
type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
