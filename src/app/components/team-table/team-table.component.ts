import { Component, OnInit } from '@angular/core';
import { TeamService, TeamsTableHeaders } from 'src/app/services/team.service';
import { Observable } from 'rxjs';
import { Team } from 'src/app/interfaces/team';
import { take } from 'rxjs/operators';
import { Countries } from 'src/app/interfaces/player';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {

  public team$: Observable<Team[]>;
  public tableHeaders = TeamsTableHeaders;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.team$ = this.teamService.getTeams();
    this.teamService.getTeams().pipe(take(1)).subscribe(teams => {
      if (teams.length === 0) {
        const team: Team = {
          name: 'Tapitas FC',
          country: Countries.Colombia,
          players: null
        };

        this.teamService.addTeam(team);
      }
    });
  }

}
