const App = () => {
  return (
    <>
      <Header>
        <Navigator>
          <Anchor>
            <Image />
          </Anchor>
          <List>
            <li>
              <Anchor>Bicicletas</Anchor>
            </li>
            <li>
              <Anchor>Seguros</Anchor>
            </li>
            <li>
              <Anchor>Contato</Anchor>
            </li>
          </List>
        </Navigator>
      </Header>

      <Main>
        <Section>
          <MainTitle>Blá Blá Blá</MainTitle>
          <Paragraph />
        </Section>

        <Section>
          <MainTitle>Blá Blá Blá</MainTitle>
          <Paragraph />
        </Section>
      </Main>
    </>
  );
};
