#include <stdio.h>

int main()
{
    // Carta 1 - Santa Catarina
    char estado1 = 'A';
    char codigo1[4] = "A01";
    char nomeCidade1[50] = "Santa Catarina";
    int populacao1 = 8187029;
    float area1 = 95730.690;
    float pib1 = 699.28; // bilhões
    int pontosTuristicos1 = 15;

    // Carta 2 - Coimbra
    char estado2 = 'B';
    char codigo2[4] = "B02";
    char nomeCidade2[50] = "Coimbra";
    int populacao2 = 140796;
    float area2 = 319.4;
    float pib2 = 126.28; // em milhões ou outra unidade simbólica
    int pontosTuristicos2 = 20;

    // Exibe dados da Carta 1
    printf("Carta 1:\n");
    printf("Estado: %c\n", estado1);
    printf("Codigo da Carta: %s\n", codigo1);
    printf("Nome da Cidade: %s\n", nomeCidade1);
    printf("Populacao: %d\n", populacao1);
    printf("Area: %.3f km²\n", area1);
    printf("PIB: %.2f bilhoes de reais\n", pib1);
    printf("Numero de Pontos Turisticos: %d\n\n", pontosTuristicos1);

    // Exibe dados da Carta 2
    printf("Carta 2:\n");
    printf("Estado: %c\n", estado2);
    printf("Codigo da Carta: %s\n", codigo2);
    printf("Nome da Cidade: %s\n", nomeCidade2);
    printf("Populacao: %d\n", populacao2);
    printf("Area: %.1f km²\n", area2);
    printf("PIB: %.2f euros\n", pib2);
    printf("Numero de Pontos Turisticos: %d\n", pontosTuristicos2);

    return 0;
}
