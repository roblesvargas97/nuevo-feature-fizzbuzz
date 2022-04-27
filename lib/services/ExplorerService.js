class ExplorerService {
  static filterByMission(explorers, mission) {
    const arrayByMission = explorers.filter(
      (element) => element.mission === mission
    );
    return arrayByMission;
  }

  static getAmountOfExplorersByMission(explorers, mission) {
    const numberOfExplorers = this.filterByMission(explorers, mission).length;
    return numberOfExplorers;
  }

  static getExplorersUsernamesByMission(explorers, mission) {
    const arrayByMission = this.filterByMission(explorers, mission);
    const newArrayByNames = arrayByMission.map(
      (element) => element.githubUsername
    );
    return newArrayByNames;
  }
}

module.exports = ExplorerService;
