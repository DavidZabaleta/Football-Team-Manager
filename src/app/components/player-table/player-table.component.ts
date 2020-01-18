import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/interfaces/player';
import { PlayerService, PlayersTableHeaders } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit {

  public playersTableHeaders = PlayersTableHeaders;
  public players$: Observable<Player[]>;
  public selectedPLayer: Player;
  public showModal = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players$ = this.playerService.getPlayers();
  }

  newPlayer() {
    this.showModal = true;
    this.selectedPLayer = null;
    setTimeout(() => {
      window.location.replace('#open');
    });
  }

}
