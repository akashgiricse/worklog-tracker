export default {
  User: {
    workstats: (parent, args, context, info) => parent.getWorkStats()
  },
  WorkStat: {
    user: (parent, args, context, info) => parent.getUser()
  },
  Query: {
    workstats: (parent, args, { db }, info) => db.worksat.findAll(),
    users: (parent, args, { db }, info) => db.user.findAll(),
    workstat: (parent, args, { db }, info) => db.worksat.findByPk(id),
    user: (parent, args, { db }, info) => db.user.findByPk(id)
  },

  Mutation: {
    createWorkStat: (parent, { date, duration, userId }, { db }, info) =>
      db.workstat.create({
        date,
        duration,
        userId
      }),
    updateWrokStat: (parent, { date, duration, id }, { db }, info) =>
      db.workstat.update(
        {
          date,
          duration
        },
        {
          where: {
            id: id
          }
        }
      ),
    deleteWorkStat: (parent, { id }, { db }, info) =>
      db.workstat.destroy({
        where: {
          id: id
        }
      })
  }
};
