    // js/main.ts (located in task_5/js/)

    /**
     * @interface MajorCredits
     * Represents credits for a major subject.
     * Includes a brand property to enable nominal typing.
     */
    interface MajorCredits {
      credits: number;
      _brand: "MajorCredits"; // Brand property for nominal typing
    }

    /**
     * @interface MinorCredits
     * Represents credits for a minor subject.
     * Includes a brand property to enable nominal typing.
     */
    interface MinorCredits {
      credits: number;
      _brand: "MinorCredits"; // Brand property for nominal typing
    }

    /**
     * @function sumMajorCredits
     * Sums the credits of two MajorCredits subjects.
     *
     * @param subject1 The first MajorCredits subject.
     * @param subject2 The second MajorCredits subject.
     * @returns A new MajorCredits object with the summed credits.
     */
    function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
      return {
        credits: subject1.credits + subject2.credits,
        _brand: "MajorCredits",
      };
    }

    /**
     * @function sumMinorCredits
     * Sums the credits of two MinorCredits subjects.
     *
     * @param subject1 The first MinorCredits subject.
     * @param subject2 The second MinorCredits subject.
     * @returns A new MinorCredits object with the summed credits.
     */
    function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
      return {
        credits: subject1.credits + subject2.credits,
        _brand: "MinorCredits",
      };
    }

    // --- Example Usage ---
    console.log("--- Task 12 Examples ---");

    // Create example MajorCredits subjects
    const majorSubjectA: MajorCredits = { credits: 3, _brand: "MajorCredits" };
    const majorSubjectB: MajorCredits = { credits: 4, _brand: "MajorCredits" };

    // Sum MajorCredits
    const totalMajorCredits = sumMajorCredits(majorSubjectA, majorSubjectB);
    console.log("Total Major Credits:", totalMajorCredits.credits); // Expected: 7

    // Create example MinorCredits subjects
    const minorSubjectX: MinorCredits = { credits: 1, _brand: "MinorCredits" };
    const minorSubjectY: MinorCredits = { credits: 2, _brand: "MinorCredits" };

    // Sum MinorCredits
    const totalMinorCredits = sumMinorCredits(minorSubjectX, minorSubjectY);
    console.log("Total Minor Credits:", totalMinorCredits.credits); // Expected: 3

    // Demonstrate nominal typing (TypeScript will prevent this)
    // const invalidSum: MajorCredits = sumMinorCredits(minorSubjectX, minorSubjectY);
    // This line would cause a TypeScript error:
    // Type 'MinorCredits' is not assignable to type 'MajorCredits'.
    // Types of property '_brand' are incompatible.
    // Type '"MinorCredits"' is not assignable to type '"MajorCredits"'.
    