import Phaser from 'phaser'
import InstrScene from './InstrScene';
import TitleScene from './TitleScene'
import RecipeScene from './RecipeScene';
import MusubiScene from './MusubiScene';
import MusubiScene2 from './MusubiScene2';
import MusubiScene3 from './MusubiScene3';

const DEFAULT_WIDTH = 800; //2560
const DEFAULT_HEIGHT = 600; //1600

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app', 
	backgroundColor: 0xFFFFFF,
	scale: {
		mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
		width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [TitleScene, RecipeScene, MusubiScene, MusubiScene2, MusubiScene3, InstrScene],
}

export default new Phaser.Game(config)
