import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface JugState {
  x: number;
  y: number;
  steps: string[];
}

@Component({
  selector: 'app-water-jug',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './water-jug.component.html',
  styleUrl: './water-jug.component.scss',
})
export class WaterJugComponent {
  x: number = 0;
  y: number = 0;
  z: number = 0;
  result: JugState[] = [];
  noSolution: boolean = false;

  calculateSteps() {
    this.result = [];
    this.noSolution = false;

    if (this.z > Math.max(this.x, this.y)) {
      this.noSolution = true;
      return;
    }

    const visited = new Set<string>();
    const queue: JugState[] = [{ x: 0, y: 0, steps: [] }];
    visited.add('0-0');

    while (queue.length > 0) {
      const state = queue.shift()!;

      if (state.x === this.z || state.y === this.z) {
        this.result.push(state);
        return;
      }

      const possibleMoves: JugState[] = [
        { x: this.x, y: state.y, steps: [...state.steps, `Fill Jug X`] },
        { x: state.x, y: this.y, steps: [...state.steps, `Fill Jug Y`] },
        { x: 0, y: state.y, steps: [...state.steps, `Empty Jug X`] },
        { x: state.x, y: 0, steps: [...state.steps, `Empty Jug Y`] },
        {
          x: Math.max(0, state.x - (this.y - state.y)),
          y: Math.min(this.y, state.y + state.x),
          steps: [...state.steps, `Pour Jug X into Jug Y`],
        },
        {
          x: Math.min(this.x, state.x + state.y),
          y: Math.max(0, state.y - (this.x - state.x)),
          steps: [...state.steps, `Pour Jug Y into Jug X`],
        },
      ];

      for (const move of possibleMoves) {
        const stateKey = `${move.x}-${move.y}`;
        if (!visited.has(stateKey)) {
          visited.add(stateKey);
          queue.push(move);
        }
      }
    }

    this.noSolution = true;
  }
}
