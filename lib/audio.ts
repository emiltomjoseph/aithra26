// Procedural Audio Engine using Web Audio API

class SoundSystem {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private ambientOsc: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
  }

  public toggleMute(): boolean {
    this.initCtx();
    this.isMuted = !this.isMuted;

    if (this.ctx && this.ctx.state === 'suspended' && !this.isMuted) {
      this.ctx.resume();
    }

    if (!this.isMuted) {
      this.startAmbient();
      this.playBeep(520, 0.08, 'sine');
    } else {
      this.stopAmbient();
    }

    return !this.isMuted;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  public startAmbient() {
    if (this.isMuted || !this.ctx) return;
    if (this.ambientOsc) return;

    try {
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc = this.ctx.createOscillator();
      this.ambientOsc.type = 'sawtooth';
      this.ambientOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A hum
      this.ambientOsc.connect(this.ambientGain);
      this.ambientOsc.start();
    } catch {
      // Audio autoplay policy
    }
  }

  public stopAmbient() {
    if (this.ambientOsc) {
      try {
        this.ambientOsc.stop();
        this.ambientOsc.disconnect();
      } catch {
        // ignore
      }
      this.ambientOsc = null;
    }
  }

  public playClick() {
    if (this.isMuted) return;
    this.playBeep(880, 0.03, 'triangle', 0.04);
  }

  public playHover() {
    if (this.isMuted) return;
    this.playBeep(440, 0.02, 'sine', 0.02);
  }

  public playSuccess() {
    if (this.isMuted) return;
    this.playBeep(587, 0.08, 'sine', 0.05);
    setTimeout(() => this.playBeep(880, 0.15, 'triangle', 0.06), 80);
  }

  public playRadarPing() {
    if (this.isMuted) return;
    this.playBeep(1200, 0.08, 'sine', 0.03);
  }

  private playBeep(freq: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.05) {
    this.initCtx();
    if (!this.ctx || this.isMuted) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio policy safe
    }
  }
}

export const sound = new SoundSystem();
