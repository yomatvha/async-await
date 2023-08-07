import GameSavingLoader from '../GameSavingLoader';

test('test', async () => {
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const obj = await GameSavingLoader.load(data);
  expect(obj).toEqual(result);
});
