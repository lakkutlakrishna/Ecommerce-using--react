import java.util.Random;
import java.util.Scanner;

public class av {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        // Generate a random crash multiplier (between 1.5x and 10x)
        double crashMultiplier = 1.5 + (random.nextDouble() * 8.5);
        crashMultiplier = Math.round(crashMultiplier * 10.0) / 10.0; // Round to 1 decimal place

        double currentMultiplier = 1.0;

        System.out.println("🚀 Aviator Game Started! 🚀");
        System.out.println("Multiplier is increasing... Type 'cashout' to withdraw!");

        while (true) {
            try {
                Thread.sleep(random.nextInt(1500) + 500); // Wait for a random interval (0.5s - 2s)
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            // Increase multiplier randomly between 0.1 and 0.5
            double increment = 0.1 + (random.nextDouble() * 0.4);
            currentMultiplier += increment;
            currentMultiplier = Math.round(currentMultiplier * 10.0) / 10.0; // Round to 1 decimal place

            // Display current multiplier
            System.out.println("Current Multiplier: " + currentMultiplier + "x");

            // Check if crash happens
            if (currentMultiplier >= crashMultiplier) {
                System.out.println("💥 Crash! The multiplier stopped at " + crashMultiplier + "x");
                System.out.println("You lost your bet! 😢");
                break;
            }

            // Check user input
            if (scanner.hasNextLine()) {
                String input = scanner.nextLine();
                if (input.equalsIgnoreCase("cashout")) {
                    System.out.println("🎉 You cashed out at " + currentMultiplier + "x!");
                    break;
                }
            }
        }

        scanner.close();
        System.out.println("Game Over!");
    }
}
