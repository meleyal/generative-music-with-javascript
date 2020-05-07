---
title: Music
---

> TODO

> Remember, music consists of sequences (i.e., lists) of events.

Here we explain the building blocks of music: melody, harmony and rhythm.

Melody, harmony, rhythm, compare with functions + primitives.

- Scales
- Chords
- Rhythm
- Tempo/BPM/beat
- Human heart beat
- Signature BPMs (house 120, hip hop 90, dnb 140)
- Time signature
- Note lengths
- Instruments

## Scales

- Western classical 12 note scale (do re me fa so la ti do)
- Major, minor
- Other scales (Dorian etc, church, jazz)
- Non-western
- Microtonal

## Definitions

- Pitch: a pitch consists of a pitch class and an octave. For example, A4
  represents the pitch class A in the fourth octave.
- Pitch Class: the pitch class A consists of the As in all octaves.
- Note: a note is a pitch combined with a duration
- Rest:
- Score:
- Part:
- Phrase:
- Octave:

> where a piece of music is represented as a score, that score has several parts
> (e.g., a flute part and a percussion part), each part contains phrases (e.g.,
> melodies, riffs, grooves, sequences, patterns), and each phrase is made up of
> a series of one or more notes (individual sound events).

> The collection of notes from one pitch to the next one of the same name, say
> C4 to C5, is an octave. All the notes within an octave (including sharps or
> flats) make up the notes of the “chromatic” scale (12 notes).

> A note in Python consists of pitch, duration, dynamic (volume), and panning
> position

> In music theory, a phrase refers to a grouping of consecutive notes. A phrase
> typically contains a melody—a linear list of notes that acts as a musical
> unit.

> For convenience, Python also defines meaningful names (constants) for pitches.
> Pitch constants consist of a letter (C, D, E, F, G, A, or B) followed by the
> octave (or register) of the pitch. For example, middle C is C4.

> In Python, dynamic values are integers. They range from 0 to 127. This follows
> the MIDI standard, which represents dynamics (or velocity) from 0 (silence) to
> 127 (loudest).

> Creating Notes The most basic musical structure in the Python music library is
> a note. Python notes have the following attributes: • pitch—an integer from 0
> (low) to 127 (high) • duration—a positive real number (quarter note is 1.0) •
> dynamic—(or volume) an integer from 0 (silent) to 127 (loudest) • panning—a
> real number from 0.0 (left) to 1.0 (right) To create a note, we specify its
> pitch, duration, dynamic, and panning position, as follows: Note(pitch,
> duration, dynamic, panning) where dynamic and panning are optional. If
> omitted, dynamic is set to 85 and panning to 0.5 (center).

> Distinctive parameters for notes are pitch, duration and velocity;

> In most computer music systems of algorithmic composition, the parameters
> pitch, duration, and dynamics may be manipulated;
