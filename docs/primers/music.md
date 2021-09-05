---
title: Music
---

> Music is organized sound.
>
> – [Edgard Varèse](https://en.wikipedia.org/wiki/Edgard_Var%C3%A8se)

---

https://www.mvanga.com/blog/basic-music-theory-in-200-lines-of-python

---

This chapter covers the fundamentals of music theory: pitch and rhythm and how
they combine to form music. Whilst this is a deep topic, the basics are easy to
grasp, and give us the language to talk about music, which will be helpful as we
try to model it in our programs.

Remember that music is just sound + time. The theory presented below is one way
to organize and understand sound. Note also that the theory comes from western
classical music. This is the most prevalent system and underpins most music, but
there are other musical systems that conceptualize music in different ways.

## Pitch

Pitch describes how high or low a sound is.

The piano keyboard helps understand pitch, everything is in front of you. We'll
use it here, but the concept of pitch applies to any instrument.

Each key on a piano keyboard creates a different pitch. Moving down the keys (to
the left) produces sounds with a lower pitch, while moving up the keys (to the
right) produces sounds with a higher pitch.

Each of these pitches has a different name.

Pitches are named using the musical alphabet C D E F G A B.

This pattern repeats on the keyboard. Each repeat defines a new octave. Octaves
are numbered. To uniquely identify each pitch, name and number, e.g. A4, this is
the musical definition of **pitch**.

### Frequency

Knowing a bit of the science behind pitch is helpful. What does it mean for a
sound to be high or low? Sound travels in waves. We perceive sound as these
waves hitting and vibrating our ear drums. What we perceive as pitch is the
frequency of these waves. The higher the frequency of the wave, the higher we
perceive the pitch.

The pitches on the keyboard are not arbitrary. They are related by frequency /
ratios.

### Scales

## Rhythm

Rhythm describes how sounds are organized in time.

## Form

---

## Draft--------------

> Remember, music consists of sequences (i.e., lists) of events.

Here we explain the building blocks of music: notes + time..., and how they form
melody, harmony and rhythm.

Sounds happening over time. All of the theory below are just ways of organizing
and understanding sound.

Preface by saying that its western classical system. It's the most prevalent and
underpins most music, but it's not the only way of thinking.

## Notes

A musical note is the sound we hear when we play a key on the piano, or pluck a
guitar string. More specifically, a note is a combination of three elements:
pitch, duration, and dynamics.

- Pitch: a pitch consists of a pitch class and an octave. For example, A4
  represents the pitch class A in the fourth octave.
- Pitch Class: the pitch class A consists of the As in all octaves.
- Note: a note is a pitch combined with a duration

### Pitch

- Frequency, resonance, vibration
- Harmonics, ratios

### Duration

- Note lengths

### Dynamics

- Volume / velocity
- Expression

### Rests

Just as important as sound is the absence of it.

## Scales

- Octave, 12 notes above, double the frequency
- Keys (pattern of steps)
- Chromatic
- Western classical 12 note scale (do re me fa so la ti do)
- Major, minor
- Other scales (Dorian etc, church, jazz)
- Non-western
- Microtonal

> The collection of notes from one pitch to the next one of the same name, say
> C4 to C5, is an octave. All the notes within an octave (including sharps or
> flats) make up the notes of the “chromatic” scale (12 notes).

## Melody

- Intervals
- Tonic / journey / resolution

## Chords

- More than 1 note played together
- Major, minor + harmonics
- Progressions, I-V-IV

## Harmony

## Tempo

- Tempo/BPM/beat
- Human heart beat
- Signature BPMs (house 120, hip hop 90, dnb 140)

## Rhythm

- Time signature
- Swing

## Structure

- Phrase
- Part
- Bar/Measure
- Score
- Forms (e.g. ABBA, rondo, canon, sonata)

## Reference

- https://github.com/aws-samples/aws-deepcomposer-samples/blob/master/Music-terminologies.md
- https://smile.amazon.co.uk/Understand-Music-Theory-Teach-Yourself/dp/1473614872

> where a piece of music is represented as a score, that score has several parts
> (e.g., a flute part and a percussion part), each part contains phrases (e.g.,
> melodies, riffs, grooves, sequences, patterns), and each phrase is made up of
> a series of one or more notes (individual sound events).

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
